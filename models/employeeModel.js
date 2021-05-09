var mongoose=require('mongoose');
var employeeSchema =new mongoose.Schema(
    {
        empname:{type:String,required:true},
        empid:{type:String,required:true},
        joiningdate:{type:String,required:true},
        designation:{type:String,required:true},
        salary:{type:String,required:true},
        emailid:{type:String,required:true}
    }
)
var employeeModel=mongoose.model('employee',employeeSchema);
module.exports={employeeModel}
