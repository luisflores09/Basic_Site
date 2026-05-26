import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appName = 'Harness';

  readonly highlights = [
    { value: '24/7', label: 'Support Coverage' },
    { value: '99.9%', label: 'Reliability Target' },
    { value: '10x', label: 'Faster Onboarding' }
  ];

  readonly featureCards = [
    {
      title: 'Unified Workflows',
      description: 'Bring requests, approvals, and delivery into one clear flow with less context switching.'
    },
    {
      title: 'Live Visibility',
      description: 'Track current status and upcoming work in real time with visual progress indicators.'
    },
    {
      title: 'Team-Ready By Default',
      description: 'Collaborate with role-based controls, notifications, and project templates that scale.'
    }
  ];

  readonly quickLinks = [
    { label: 'Documentation', href: '#' },
    { label: 'Product Tour', href: '#' },
    { label: 'Release Notes', href: '#' }
  ];

  readonly onboardingChecklist = [
    'Create your workspace and invite teammates',
    'Set goals and milestones for the sprint',
    'Connect your tools and automate updates'
  ];
}
