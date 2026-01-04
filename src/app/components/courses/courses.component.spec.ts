import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/angular';
import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  beforeEach(async () => {
    await render(CoursesComponent);
  });

  it('should render the courses section with heading', () => {
    expect(screen.getByText('Our Courses')).toBeTruthy();
  });

  it('should render both course cards', () => {
    expect(screen.getByText('Group Classes')).toBeTruthy();
    expect(screen.getByText('One-to-One Classes')).toBeTruthy();
  });

  it('should render course features for group classes', () => {
    expect(screen.getByText('Small batch sizes (6-10 students)')).toBeTruthy();
    expect(screen.getByText('Interactive group puzzles')).toBeTruthy();
  });

  it('should render enquire now buttons', () => {
    const buttons = screen.getAllByText('Enquire Now');
    expect(buttons.length).toBe(2);
  });
});
