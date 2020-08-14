const model = require('./../models/index')

module.exports = {
    async get(req, res, next) {
        var response = {}
        var limit = req.query.limit || 10
        var page = req.query.page || 1
        var keyword = req.query.keyword || ''
        var offset = 0
        if (page > 1) offset = ((page - 1) * 10) +1

        var order = req.query.order || 'asc'
        var column = req.query.column || 'created_at'

        return await model.users
            .findAll({
                where: {
                    is_delete: 0
                },
                limit: parseInt(limit),
                offset: parseInt(offset)
            })
            .then((users) => {
                return model.users
                    .count({
                        where: {
                            is_delete: 0
                        }
                    })
                    .then((count) => {
                        response = {
                            "success": true,
                            "message": "success",
                            "limit": parseInt(limit),
                            "count": parseInt(count),
                            "page": parseInt(page),
                            "keyword": keyword,
                            "max_page": Math.ceil(count/limit),
                            "order": order,
                            "column": column,
                            "data": users || []
                        }
                        res.send(response)
                    })
                    .catch((error) => {
                        console.log(error)
                        response = {
                            "success": false,
                            "message": error,
                            "data": []
                        }
                        res.send(error)
                    })
            })
            .catch((error)=> {
                console.log(error)
                response = {
                    "success": false,
                    "message": error,
                    "data": []
                }
                res.send(error)
            })
    },
    async getById(req, res, next) {
        let response = {}
        return await model.users
            .findByPk(req.params.id)
            .then((user) => {
                response = {
                    "success": true,
                    "message": "success",
                    "data": user
                }
                res.send(response)
            })
            .catch((error) => {
                response = {
                    "success": false,
                    "message": error,
                    "data": {}
                }
                res.send(response)
            })
    }

}