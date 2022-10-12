import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { Product } from '../../../../core/models/product';
import { ProductService } from '../../../../core/services/product/product.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  @Input() public title!: string;
  @ViewChild('closeModal') public closeModal!: ElementRef;
  @Output() newProductEvent: EventEmitter<Product> = new EventEmitter<Product>();
  public productForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public onSubmit() {
    this.productService.createProduct(this.productForm.value).subscribe({
      next: (response) => {
        Swal.fire({
          title: 'EXITO!',
          titleText: response.getMessage,
          icon: 'success',
          position: 'center',
          timer: 1500,
        });
        this.closeModal.nativeElement.click();
        this.productForm.reset();
        this.newProductEvent.emit(response.data);
      }
    });
  }
  
  public isValidField(field: string): string {
    const validatedField = this.productForm.get(field);

    return (!validatedField?.valid && validatedField?.touched)
    ? 'is-invalid': validatedField?.touched ? 'is-valid': '';
  }

  private initForm(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      stock: [0, Validators.required],
      price: [0, Validators.required],
      description: ['', Validators.required],
    });
  }

}
