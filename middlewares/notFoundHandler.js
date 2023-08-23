import createError from 'http-errors'

const notFoundHandler = (req, res, next) => {
    next(createError(404, 'Error router Not Found'))
}
export default notFoundHandler