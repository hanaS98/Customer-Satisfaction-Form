import { Component } from '@angular/core';
import { DropDownSize } from "@progress/kendo-angular-dropdowns";
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-service-channel',
  templateUrl: './service-channel.component.html',
  styleUrls: ['./service-channel.component.css','../main.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ServiceChannelComponent {
  public isDisabledProducts = true;
  public selectedCategory:any;
  public selectedProduct:any;

  public dataCategory: Array<{ category: string; categoryId: number }> = [
    { category: "الدراسات واستشارات  ", categoryId: 1 },
    { category: "اعتماد التقارير الفنية ", categoryId: 2 },
    { category: "خدمات المعامل والمختبرات ", categoryId: 3 },
    { category: "بيانات رقمية ", categoryId: 4 },
    { category: "مطبوعات", categoryId: 5 },
    { category: "آخرى", categoryId: 6 },
  ];

  public dataProducts: Array<{
    productName: string;
    productId: number;
    categoryId: number;
  }> = [
    { productName: "الدراسات الجيوتقنية", productId: 1, categoryId: 1 },
    { productName: "دراسات المخاطر جيولوجية", productId: 2, categoryId: 1 },
    { productName: "دراسات جيوفيزيائية", productId: 3, categoryId: 1 },
    { productName: "دراسات زلزالية وبركانية", productId: 4, categoryId: 1},
    { productName: "دراسات المسح والتنقيب", productId: 5, categoryId: 1 },
    { productName: "الدراسات الجيولوجية الهندسية", productId: 6, categoryId: 1 },
    { productName: "الدراسات جيولوجيا المياه", productId: 7, categoryId: 1 },
    { productName: "الدراسات الجيولوجيا البيئية", productId: 8, categoryId: 1 },
    { productName: " نظم المعلومات الجغرافية والاستشعار عن بعد", productId: 9, categoryId: 1 },
    { productName: "الاعمال المساحية", productId: 10, categoryId: 1},
    { productName: "دراسات الصحاري والتصحر", productId: 11, categoryId: 1 },
    { productName: "الدراسات والاستشارات التعدينية", productId: 12, categoryId: 1 },
    { productName: "اخرى", productId: 13, categoryId: 1 },
    { productName: "مراجعة واعتماد تقارير هيدرولوجية", productId: 14, categoryId: 2 },
    { productName: "مراجعة واعتماد دراسات تقارير هيدرولوجية", productId: 15, categoryId: 2 },
    { productName: "مراجعة واعتماد تقارير دراسات تحديد اعمال القطع الصخري", productId: 16, categoryId: 2 },
    { productName: "اخرى", productId: 17, categoryId: 2 },
    { productName: "التحاليل الكيميائية العامة", productId: 18, categoryId: 3 },
    { productName: "اختبارات التربة", productId: 19, categoryId: 3 },
    { productName: "اختبارات الصخور والركام .", productId: 20, categoryId: 3 },
    { productName: "الدراسات المجهرية", productId: 21, categoryId: 3 },
    { productName: "التحاليل الفيزيائية والكيميائية لعينات المياه", productId: 22, categoryId: 3 },
    { productName: "اختبارات الجيولوجيا الهندسية", productId: 23, categoryId: 3 },
    { productName: "معالجة وتطوير الخامات المعدنية", productId: 24, categoryId: 3 },
    { productName: "اختبارات النشاط الإشعاعي", productId: 25, categoryId: 3 },
    { productName: "معمل الأحجار الكريمة", productId: 26, categoryId: 3 },
    { productName: "اخرى", productId: 27, categoryId: 3 },
    { productName: "بيانات جيوفيزيائية", productId: 28, categoryId: 4 },
    { productName: "بيانات هيدروجيولوجية", productId: 29, categoryId: 4 },
    { productName: "صور جوية او أقمار صناعية", productId: 30, categoryId: 4 },
    { productName: "اخرى", productId: 31, categoryId: 4 },
    { productName: "خرائط", productId: 32, categoryId: 5 },
    { productName: "تقارير", productId: 33, categoryId: 5 },
    { productName: "كتب", productId: 34, categoryId: 5 },
    { productName: "اخرى", productId: 35, categoryId: 5 },
    { productName: "خدمات مكتبة الحفر الوطنية", productId: 36, categoryId: 6 },
    { productName: "خدمات لوجستية", productId: 37, categoryId: 6 },
    { productName: "اخرى", productId: 38, categoryId: 6 },
  ];



  public dataResultProducts!: Array<{
    productName: string;
    productId: number;
    categoryId: number;
  }>;



  handleCategoryChange(value:any) {
    this.selectedCategory = value;
    this.selectedProduct = undefined;

    if (value === undefined) {
      this.isDisabledProducts = true;
      this.dataResultProducts = [];
    } else {
      this.isDisabledProducts = false;
      this.dataResultProducts = this.dataProducts.filter(
        (s) => s.categoryId === value.categoryId
      );
    }

  }

  handleProductChange(value:any) {
    this.selectedProduct = value;
  }

  public selectedSize: DropDownSize = "large";
  public sizes: DropDownSize[] = ["small", "medium", "large",'none'];

  public allowCustom = true;
  public selectedValues: string = "Baseball";
  public listItems: Array<string> = [
    "Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",
  ];
}
