import { FunctionCall, templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Command } from 'protractor';

@Component({
  selector: 'app-ganesh-bundobust',
  templateUrl: './ganesh-bundobust.component.html',
  styleUrls: ['./ganesh-bundobust.component.css'],
})
export class GaneshBundobustComponent implements OnInit {
  items: MenuItem[];
  visibleSidebar1;
  Table1: boolean = false;
  Table2: boolean = false;
  Table3: boolean = false;
  Table4: boolean = false;
  Table5: boolean = false;
  Table6: boolean = false;
  Table7: boolean = false;
  Table8: boolean = false;
  Table9: boolean = false;
  Table9A: boolean = false;
  Table10: boolean = false;
  Table11: boolean = false;
  Table12: boolean = false;
  Table13: boolean = false;
  Table14: boolean = false;
  Table15: boolean = false;
  Table16: boolean = false;
  Table17: boolean = false;
  Table18: boolean = false;
  Table19: boolean = false;
  Table20: boolean = false;
  Table21: boolean = false;
  Table22: boolean = false;
  Table23: boolean = false;
  Table24: boolean = false;
  Table25: boolean = false;
  Table25A: boolean = false;
  Table25B: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'ANNEXURES',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'ANNEXURE-I',
            icon: 'pi pi-fw pi-pencil', 
            command: (event) => {
              this.Annexure1();
            },
          },
          {
            label: 'ANNEXURE-II',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure2();
            },
          },
          {
            label: 'ANNEXURE-III',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure3();
            },
          },
          {
            label: 'ANNEXURE-IV',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure4();
            },
          },
          {
            label: 'ANNEXURE-V',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure5();
            },
          },
          {
            label: 'ANNEXURE-VI',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure6();
            },
          },
          {
            label: 'ANNEXURE-VII',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure7();
            },
          },
          {
            label: 'ANNEXURE-VIII',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure8();
            },
          },
          {
            label: 'ANNEXURE-IX',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure9();
            },
          },
          {
            label: 'ANNEXURE-IX-A',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure9A();
            },
          },
          {
            label: 'ANNEXURE-X',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure10();
            },
          },
          {
            label: 'ANNEXURE-XI',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure11();
            },
          },
          {
            label: 'ANNEXURE-XII',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure12();
            },
          },
          {
            label: 'ANNEXURE-XIII',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure13();
            },
          },
          {
            label: 'ANNEXURE-XIV',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure14();
            },
          },
          {
            label: 'ANNEXURE-XV',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure15();
            },
          },
          {
            label: 'ANNEXURE-XVI',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure16();
            },
          },
          {
            label: 'ANNEXURE-XVII',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure17();
            },
          },
          {
            label: 'ANNEXURE-XVIII',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure18();
            },
          },
          {
            label: 'ANNEXURE-XIX',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure19();
            },
          },
          {
            label: 'ANNEXURE-XX',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure20();
            },
          },
          {
            label: 'ANNEXURE-XXI',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure21();
            },
          },
          {
            label: 'ANNEXURE-XXII',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure22();
            },
          },
          {
            label: 'ANNEXURE-XXIII',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure23();
            },
          },
          {
            label: 'ANNEXURE-XXIV',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure24();
            },
          },
          {
            label: 'ANNEXURE-XXV',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure25();
            },
          },
          {
            label: 'ANNEXURE-XXV-A',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure25A();
            },
          },
          {
            label: 'ANNEXURE-XXV-B',
            icon: 'pi pi-fw pi-pencil',
            command: (event) => {
              this.Annexure25B();
            },
          },
        ],
      },
    ];
  }
  Annexure1() {
    this.Table1 = true;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure2() {
    this.Table1 = false;
    this.Table2 = true;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure3() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = true;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure4() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = true;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure5() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = true;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure6() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = true;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure7() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = true;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure8() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = true;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure9() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = true;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure9A() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = true;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure10() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = true;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure11() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = true;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure12() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = true;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure13() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = true;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure14() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = true;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure15() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = true;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure16() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = true;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure17() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = true;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure18() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = true;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure19() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = true;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure20() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = true;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure21() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = true;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure22() {
    console.log("22");
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = true;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure23() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = true;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure24() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = true;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure25() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = true;
    this.Table25A = false;
    this.Table25B = false;
  }
  Annexure25A() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = true;
    this.Table25B = false;
  }
  Annexure25B() {
    this.Table1 = false;
    this.Table2 = false;
    this.Table3 = false;
    this.Table4 = false;
    this.Table5 = false;
    this.Table6 = false;
    this.Table7 = false;
    this.Table8 = false;
    this.Table9 = false;
    this.Table9A = false;
    this.Table10 = false;
    this.Table11 = false;
    this.Table12 = false;
    this.Table13 = false;
    this.Table14 = false;
    this.Table15 = false;
    this.Table16 = false;
    this.Table17 = false;
    this.Table18 = false;
    this.Table19 = false;
    this.Table20 = false;
    this.Table21 = false;
    this.Table22 = false;
    this.Table23 = false;
    this.Table24 = false;
    this.Table25 = false;
    this.Table25A = false;
    this.Table25B = true;
  }
  temp(){
    console.log("heeee");
   }
}


