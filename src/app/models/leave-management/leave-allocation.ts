
import { LeaveType } from './leave-type';
import { User } from './user';
export class LeaveAllocation {
    id:number;
    user:User;
    leaveType:LeaveType;
    allocatedDays:number;
    utilizedDays:number;
}

