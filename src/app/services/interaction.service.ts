
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Referee } from '../modules/general/profiles/view-profile-info/view-referees/referee.model';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/leave-management/user';
import { LeaveRequest } from '../models/leave-management/leave-request';
import { CarryforwardLeaveRequest, CarryforwardRequestData } from '../models/leave-management/carryforward-leave-request';


@Injectable({
  providedIn: 'root'
})

export class InteractionService {

  constructor() { }

  private loggedInSource = new Subject<string>();
  private msgDataSource = new Subject<string>();
  private responseDataSource = new Subject<Response>();
  private refereeDataSource = new Subject<Referee>()
  private userInfo = new BehaviorSubject<any>(null);
  private userDataSource = new Subject<User>();
  private leaveIdDataSource = new Subject<number>();
  private leaveRequestDataSource = new Subject<LeaveRequest>();
  private cancelRequestIdDataSource = new Subject<number>();
  private profileObservable = new Subject<string>();
  //jananthan for view reject cancel request
  private leaveRequestDataIndividualSource =new Subject<LeaveRequest>();
  //Mayu Start
  private carryforwardRequestDataSource = new Subject<CarryforwardLeaveRequest>();
  private carryforwardLeaveDataSource = new Subject<CarryforwardRequestData>();



  profileObservable$ = this.profileObservable.asObservable();
  loggedInSource$ = this.loggedInSource.asObservable();
  responseDataSource$ = this.responseDataSource.asObservable();
  refereeDataSource$ = this.refereeDataSource.asObservable();
  userInfo$ = this.userInfo.asObservable();
  msgDataSource$ = this.msgDataSource.asObservable();
  userDataSource$ = this.userDataSource.asObservable();
  leaveIdDataSource$ = this.leaveIdDataSource.asObservable();
  leaveRequestDataSource$ = this.leaveRequestDataSource.asObservable();
  cancelRequestIdDataSource$ = this.cancelRequestIdDataSource.asObservable();
  //MayuStart
  carryforwardRequestDataSource$ = this.carryforwardRequestDataSource.asObservable();
  carryforwardRequestIdDataSource$ = this.carryforwardLeaveDataSource.asObservable();
  //jananthan
  leaveRequestDataIndividualSource$=this.leaveRequestDataIndividualSource.asObservable();
  pushRouteRole(role: string) {
    this.profileObservable.next(role);
  }

  sendLogin(loggedIn: string) {
    this.loggedInSource.next(loggedIn);
  }

  sendResponseService(response: Response) {
    return this.responseDataSource.next(response);
  }
  upadateMsg(msg: string) {
    this.msgDataSource.next(msg);
  }

  sendReferee(referee: Referee) {
    return this.refereeDataSource.next(referee);
  }
  sendUserInfo(userDetails: any) {
    this.userInfo.next(userDetails);
  }
  sendUserId(user: User) {
    this.userDataSource.next(user);
  }

  setLeaveId(leaveId: number) {
    this.leaveIdDataSource.next(leaveId);
  }

  sendLeaveRequest(leaveRequest: LeaveRequest) {
    this.leaveRequestDataSource.next(leaveRequest);
  }

  //Mayu
  sendCarryForwardLeaveRequest(carryforwardRequest: CarryforwardLeaveRequest) {
    this.carryforwardRequestDataSource.next(carryforwardRequest);
  }

  sendCarryforward(carryforward) {
    this.carryforwardLeaveDataSource.next(carryforward);
  }

  sendCancelRequestId(cancelRequestId: number) {
    this.cancelRequestIdDataSource.next(cancelRequestId);
  }
  sendLeaveRequestIndividual(leaveRequest: LeaveRequest){
    this.leaveRequestDataIndividualSource.next(leaveRequest);
  }

}
