import axios from "axios";
const EMPLOYEE_BASE_REST_API_URL="http://20.123.246.134:9091/v1/api/manager/createemployee";
const EMPLOYEE_API_BASE_URL =  "http://20.123.246.134:9091/v1/api/manager/findAllEmployee" ;
const EMPLOYEE_API_BASE_URL_ID =`http://localhost:9091/v1/api/manager/findById`;
class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    
    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL_ID+"/"+employeeId)   ;
       }
       updateEmployee(employeeId,employee){
           return axios.put(EMPLOYEE_API_BASE_URL_ID +"/"+ employeeId,employee)
   
       }

}
export default new EmployeeService()