import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product.component';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('має створити новий компонент', () => {
    expect(component).toBeTruthy();
  });

  it('Повинно створити правильну форму і ініціалізувати необхідні поля.', () => {
    expect(component.myreactForm.get('title')).not.toBeNull();
    expect(component.myreactForm.get('price')).not.toBeNull();
    expect(component.myreactForm.get('author')).not.toBeNull();
    expect(component.myreactForm.get('reklama')).not.toBeNull();
  });

  it('форма повинна бути валідна коли поля введені правильно', () => {
    component.myreactForm.patchValue({
      title: 'Product 1',
      price: 10,
      author: 'Edward',
      reklama: 'default'
    });

    component.onSubmit();

    expect(component.myreactForm.valid).toBeTruthy();
  });

  it('форма повинна бути  НЕвалідна коли поля введені НЕправильно', () => {
    component.myreactForm.patchValue({
      title: '',
      price: null,
      author: 'J',
      reklama: 'default'
    });

    component.onSubmit();

    expect(component.myreactForm.invalid).toBeTruthy();
    expect(component.myreactForm.get('title')['errors']['required']).toBeTruthy();
    expect(component.myreactForm.get('price')['errors']['required']).toBeTruthy();
    expect(component.myreactForm.get('author')['errors']['minlength']).toBeTruthy();
  });
});
