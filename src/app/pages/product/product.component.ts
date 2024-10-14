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
        subDescription: `Our minerals are sourced from reputable suppliers and undergo rigorous quality control processes to ensure they
        meet industry standards and provide reliable performance in all applications.`,
        products: [
          {
            name: "Barite",
            img: "/assets/img/ps1.jpg",
            usage: "Used primarily as a weighting agent in drilling fluids, barite is critical in maintaining well stability and preventing blowouts. We provide premium-grade barite that meets API specifications, ensuring optimal performance in drilling operations."
          },
          {
            name: "Bentonite",
            img: "/assets/img/ps1.jpg",
            usage: "This clay mineral is widely used in drilling muds to increase viscosity and provide fluid loss control. Our bentonite is carefully processed to meet the specific needs of our clients, offering superior swelling properties and thermal stability."
          },
          {
            name: "Hematite",
            img: "/assets/img/ps1.jpg",
            usage: "As a weighting agent alternative to barite, hematite offers higher density and is used in specialized drilling applications. We supply hematite that delivers exceptional performance, particularly in high-temperature and high-pressure wells."
          },
          {
            name: "Calcium Carbonate",
            img: "/assets/img/ps1.jpg",
            usage: "Used in various drilling, completion, and cementing operations, calcium carbonate is valued for its ability to act as a bridging agent and to control fluid loss. Our product line includes different grades to suit diverse operational requirements."
          }
        ]
      }
    ],
    productionChemicals: [
      {
        header: "Production Chemicals",
        description: `Our Production Chemicals division offers a comprehensive range of products designed to enhance the efficiency and reliability of oil and gas production`,
        subDescription: `They are developed using the latest
technology and are designed to meet the demanding needs
of the oil and gas industry, ensuring that our clients can
maintain high levels of production efficiency and equipment
integrity.`,
        products: [
          {
            name: "Corrosion Inhibitors",
            img: "assets/img/img3.jpg",
            usage: "Crucial in protecting pipelines, equipment, and infrastructure from corrosion, extending their operational life. We provide advanced formulations that are effective in various environments, including high-salinity and high-temperature conditions."
          },
          {
            name: "Scale Inhibitors",
            img: "assets/img/img3.jpg",
            usage: "Designed to prevent and dissolve scale deposits, ensuring smooth and uninterrupted production. Our scale inhibitors significantly reduce the efficiency loss caused by scale formation."
          },
          {
            name: "Demulsifiers",
            img: "assets/img/img3.jpg",
            usage: "Used to separate oil from water and contaminants, improving the quality of the extracted crude oil. We offer tailored solutions that work effectively across different crude oil grades and conditions."
          },
          {
            name: "Paraffin Inhibitors",
            img: "assets/img/img3.jpg",
            usage: "Prevents wax formation in pipelines, ensuring optimal flow and reducing blockages. Our paraffin inhibitors reduce maintenance costs and enhance operational efficiency."
          },
          {
            name: "Biocides",
            img: "assets/img/img3.jpg",
            usage: "Controls microbial growth that can cause corrosion and other operational issues. Effective against a wide spectrum of microorganisms, including sulfate-reducing bacteria."
          }
        ]
      }
    ],
    specialtyChemicals: [
      {
        header: "Specialty Chemicals",
        description: `Manajem's Specialty Chemicals unit provides advanced chemical solutions tailored to address specific challenges in the oil and gas sector.`,
        subDescription: `Our specialty chemicals are engineered to solve the unique challenges faced by the oil and gas industry, offering innovative solutions that enhance operational performance and reduce costs.`,
        products: [
          {
            name: "Foamers",
            img: "assets/img/img4.jpg",
            usage: "Used in gas well deliquification to reduce liquid loading and enhance gas production rates. These chemicals are particularly effective in low-pressure wells and complex reservoirs, preventing premature well shut-in and reducing production decline."
          },
          {
            name: "Asphaltene Inhibitors",
            img: "assets/img/img4.jpg",
            usage: "Prevents the precipitation of asphaltenes, heavy organic compounds, which can lead to severe flow assurance problems. Ensures smooth pipeline and well operations."
          },
          {
            name: "Hydrate Inhibitors",
            img: "assets/img/img4.jpg",
            usage: "Prevents gas hydrate formation that can block pipelines. Designed to work effectively under extreme temperature and pressure conditions."
          },
          {
            name: "Drag Reducing Agents (DRA)",
            img: "assets/img/img4.jpg",
            usage: "Improves the flow efficiency of pipelines, reducing the energy required for pumping and increasing throughput. These agents are especially valuable for long-distance and high-capacity pipelines."
          },
          {
            name: "Emulsifiers and De-Emulsifiers",
            img: "assets/img/img4.jpg",
            usage: "Used in drilling fluids, production operations, and refinery processes to manage fluid properties and separate unwanted phases. Ensures process efficiency and stability."
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
        this.updateFilteredProducts();

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
