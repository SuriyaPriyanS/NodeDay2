import express from 'express';
import {  creactEmpolyee, deleteEmployee, editeEmployee, getEmployeeDetailId, getEmplpoyeeDetail } from '../Controllers/employeeController.js';


const router = express.Router();

router.get('/empDetails', getEmplpoyeeDetail)
router.get('/empDetails/:id', getEmployeeDetailId)
router.post('/createEmp',creactEmpolyee)
router.put('/edit/:id',editeEmployee)
router.delete('/delete/:id',deleteEmployee)
     



export default router;