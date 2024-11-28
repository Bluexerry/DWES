const items = require('../models/items');

const getItems = (req, res) => {
  let { sort, filter, page, limit } = req.query;

  let result = [...items];

  // Filtrado
  if (filter) {
    result = result.filter(item => item.category === filter);
  }

  // Ordenación
  if (sort) {
    const sortOrder = sort.startsWith('-') ? -1 : 1;
    const sortField = sort.startsWith('-') ? sort.substring(1) : sort;
    result.sort((a, b) => {
      if (a[sortField] < b[sortField]) return -1 * sortOrder;
      if (a[sortField] > b[sortField]) return 1 * sortOrder;
      return 0;
    });
  }

  // Paginado
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedResult = result.slice(startIndex, endIndex);

  res.json({
    total: result.length,
    page,
    limit,
    results: paginatedResult,
  });
};

module.exports = {
  getItems,
};