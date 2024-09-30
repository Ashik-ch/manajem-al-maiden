import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productsAndServices = {
    minerals: [
      {
        header: "Minerals",
        description: "Manajem is a leading supplier of high-quality minerals, essential for various applications within the oil and gas industry.",
        products: [
          {
            name: "Barite",
            img: "/assets/img/ps1.jpg",
            usage: "Used primarily as a weighting agent in drilling fluids, barite is critical in maintaining well stability and preventing blowouts.",
            details: "We provide premium-grade barite that meets API specifications, ensuring optimal performance in drilling operations."
          },
          {
            name: "Bentonite",
            img: "/assets/img/ps1.jpg",
            usage: "Widely used in drilling muds to increase viscosity and provide fluid loss control.",
            details: "Our bentonite is carefully processed to meet the specific needs of our clients, offering superior swelling properties and thermal stability."
          },
          {
            name: "Hematite",
            img: "/assets/img/ps1.jpg",
            usage: "A weighting agent alternative to barite, hematite offers higher density and is used in specialized drilling applications.",
            details: "We supply hematite that delivers exceptional performance, particularly in high-temperature and high-pressure wells."
          },
          {
            name: "Calcium Carbonate",
            img: "/assets/img/ps1.jpg",
            usage: "Used in various drilling, completion, and cementing operations as a bridging agent and to control fluid loss.",
            details: "Our product line includes different grades to suit diverse operational requirements."
          }
        ]
      }
    ],
    productionChemicals: [
      {
        header: "Production Chemicals",
        description: "A comprehensive range of products designed to enhance the efficiency and reliability of oil and gas production.",
        products: [
          {
            name: "Corrosion Inhibitors",
            img: "assets/img/img3.jpg",
            usage: "Crucial in protecting pipelines, equipment, and infrastructure from corrosion.",
            details: "We provide advanced formulations effective in high-salinity and high-temperature conditions."
          },
          {
            name: "Scale Inhibitors",
            img: "assets/img/img3.jpg",
            usage: "Designed to prevent and dissolve scale deposits.",
            details: "Ensures smooth and uninterrupted production."
          },
          {
            name: "Demulsifiers",
            img: "assets/img/img3.jpg",
            usage: "Used to separate oil from water and contaminants.",
            details: "Tailored solutions for improving the quality of crude oil in various grades and conditions."
          },
          {
            name: "Paraffin Inhibitors",
            img: "assets/img/img3.jpg",
            usage: "Prevents wax formation in pipelines, ensuring optimal flow.",
            details: "Reduces maintenance costs and improves efficiency."
          },
          {
            name: "Biocides",
            img: "assets/img/img3.jpg",
            usage: "Controls microbial growth that can cause corrosion and other issues.",
            details: "Effective against a wide spectrum of microorganisms, including sulfate-reducing bacteria."
          }
        ]
      }
    ],
    specialtyChemicals: [
      {
        header: "Specialty Chemicals",
        description: "Advanced chemical solutions tailored to address specific challenges in the oil and gas sector.",
        products: [
          {
            name: "Foamers",
            img: "assets/img/img4.jpg",
            usage: "Used in gas well deliquification to reduce liquid loading and enhance gas production rates.",
            details: "Effective in low-pressure wells and complex reservoirs, preventing premature well shut-in."
          },
          {
            name: "Asphaltene Inhibitors",
            img: "assets/img/img4.jpg",
            usage: "Prevents the precipitation of asphaltenes, heavy organic compounds.",
            details: "Ensures smooth pipeline and well operations."
          },
          {
            name: "Hydrate Inhibitors",
            img: "assets/img/img4.jpg",
            usage: "Prevents gas hydrate formation in pipelines.",
            details: "Effective under extreme temperature and pressure conditions."
          },
          {
            name: "Drag Reducing Agents (DRA)",
            img: "assets/img/img4.jpg",
            usage: "Improves pipeline flow efficiency, reducing energy required for pumping.",
            details: "Valuable for long-distance and high-capacity pipelines."
          },
          {
            name: "Emulsifiers and De-Emulsifiers",
            img: "assets/img/img4.jpg",
            usage: "Used in drilling fluids, production operations, and refinery processes.",
            details: "Helps manage fluid properties and separate unwanted phases for process efficiency."
          }
        ]
      }
    ]
  };

  activeCategory: keyof typeof this.productsAndServices = 'minerals';
  filteredProducts: any[] = [];
  currentParams: 'minerals' | 'productionChemicals' | 'specialtyChemicals' = 'minerals';

  constructor(private AR: ActivatedRoute) { }

  ngOnInit() {
    this.AR.params.subscribe(params => {
      const param = params['ps'] as 'minerals' | 'productionChemicals' | 'specialtyChemicals';
      if (param) {
        this.currentParams = param;
        this.activeCategory = this.currentParams;
        this.updateFilteredProducts();
      }
      else {
        this.currentParams = "minerals";
      }
    });
  }

  setActiveCategory(category: keyof typeof this.productsAndServices) {
    this.activeCategory = category;
    this.updateFilteredProducts();
  }

  updateFilteredProducts() {
    this.filteredProducts = this.productsAndServices[this.activeCategory] || [];
  }
}
