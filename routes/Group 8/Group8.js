const express = require('express');
const router = express.Router();

const {
  getAllReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
} = require('../../Controllers/Group 8/HealthAnalystController');


router.get('/', getAllReports);
router.get('/:id', getReportById);
router.post('/', createReport);
router.put('/:id', updateReport);
router.delete('/:id', deleteReport);

export default router;