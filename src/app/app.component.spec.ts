import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let menucompoent: NavbarComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [AppComponent, NavbarComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('AppComponent should be created', () => {
        expect(component).toBeTruthy();
    });
});