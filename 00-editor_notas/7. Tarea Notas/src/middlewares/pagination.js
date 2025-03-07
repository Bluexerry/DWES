const paginationItems = (req, items, offset, limit) => {
    const first = parseInt(offset, 10);
    const step = parseInt(limit, 10);
    const last = first + step;
    const lastPage = Math.floor((items.total - 1) / step) * step;
    const nextPage = first + step;
    const prevPage = first - step >= 0 ? first - step : 0;

    return {
        links: {
            base: `${req.protocol}://${req.get('host')}${req.baseUrl}${req.path}`,
            first: first !== 0 ? `?offset=0&limit=${step}` : undefined,
            previous: first >= step ? `?offset=${prevPage}&limit=${step}` : undefined,
            next: last < items.total ? `?offset=${nextPage}&limit=${step}` : undefined,
            last: `?offset=${lastPage}&limit=${step}`,
        },
        offset,
        limit,
        total: items.total,
        pages: Math.ceil(items.total / step),
        results: items.values,
    };
};

module.exports = {
    paginationItems,
};