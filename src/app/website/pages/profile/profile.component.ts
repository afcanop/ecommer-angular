import {Component, OnInit} from '@angular/core';

import {AuthGuard} from '../../../guards/auth.guard'
import {AuthService} from '../../../services/auth.service'
import {User} from '../../../models/user.model'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User | null = null
  constructor(
    private authGuard: AuthGuard,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.user$
      .subscribe(data => {
        this.user = data
      })
  }
}
