import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-leave-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leave-details.component.html',
  styleUrl: './leave-details.component.scss'
})
export class LeaveDetailsComponent implements OnInit {
    leaveId = '';
    createdBy = '';
    leaveType = '';
    leaveStartDate = '';
    leaveEndDate ='';
    leave: any;
  constructor(private route: ActivatedRoute,
    private leaveService: LeaveService){}
  ngOnInit(): void {
      this.route.params.subscribe(param =>{
        this.leaveId = param["id"];
        this.getMyLeaveById(parseInt(this.leaveId));
      })
  }
  getMyLeaveById(id: number){
    this.leaveService.getLeavesById(id).subscribe(resp =>{
      this.leave = resp;
    });
  }
}
