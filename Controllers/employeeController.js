const employees = [
    {id:1, emp_name : "suriya",designation: "cluddevloper"},

    {id: 2, emp_name: "gowtham", designation:"QA"},
    {id: 3, emp_name: "Bashith", designation:"sotware Tester"},
    {id: 4, emp_name: "Ragithi", designation:"Sotware devloper"},
    {id: 5, emp_name: "Ranjith", designation:"QA"},
    {id: 6, emp_name: "surya", designation:"QA"},
    {id: 7, emp_name: "rupan", designation:"solution Architect"},
]

//getcall or get method
export const getEmplpoyeeDetail =(req,res)=>{
    res.status(200).json({data:employees})
};


export const getEmployeeDetailId =(req,res)=>{

    const empId = req.params.id
    console.log(empId);
    const empDetail = employees.find((ele)=>ele.id == empId);
    if(!empDetail){
        return res.status(404).send({message:"Empoyee Details", data: empDetail});
    }

}

// const empDetail = employees.find(ele=>ele.id == empId)

// if

export const creactEmpolyee = (req,res) => {
    const {emp_name,designation} = req.body
    const newEmployee = {
        id: employees.length+1,
        emp_name: emp_name,
        designation:designation
    }
       
       employees.push(newEmployee)

    res.status(200).json({message:"emplyee created successfully",data:newEmployee})
}

export const editeEmployee = (req,res)=>{
    const empId =req.params.id
    const {emp_name,designation} = req.body
    const index = employees.findIndex(ele=>ele.id == empId)

    if(index === 1){
        return res.status(404).send("emplyee detail not found")
    }
    employees[index].emp_name = emp_name;
    employees[index].designation = designation;
    res.status(200).json({message: "empoyee updated sucessfully",data:employees[index]})
};
export const deleteEmployee = (req,res)=>{
    const empId = req.params.id;
    const index = employees.findIndex((ele)=>ele.id == empId);
    if(index === -1){
        return res.status(404).send("Employee detail not found");
    }
    employees.splice(index,1);
    res.status(200).json({message: "Employee Deleted Successfully"});
};