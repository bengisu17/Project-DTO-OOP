class Agent {
    constructor(id, name, budget) {
      this.id = id;
      this.name = name;
      this.budget = budget;
      this.sources = [];
    }
  }

const agent1 = new Agent(1, 'Agent1', 100);
const agent2 = new Agent(2, 'Agent2', 200);
const agent3 = new Agent(3, 'Agent3', 300);

  
  class Source {
    constructor(id, name, type, unitCost, capacity) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.unitCost = unitCost;
      this.capacity = capacity;
    }
  }
  
  const source1 = new Source(1, 'Wind', 'Renewable', 5, 100);
  const source2 = new Source(2, 'Sun', 'Renewable', 10, 150);
  const source3 = new Source(3, 'Wave', 'Renewable', 20, 200 )
  
  class Offer {
    constructor(id, source, quantity, unitCost, agent) {
      this.id = id;
      this.source = source;
      this.quantity = quantity;
      this.unitCost = unitCost;
      this.agent = agent;
    }
  
    calculateTotalPrice() {
      return this.quantity * this.unitCost;
    }
  }

const offer1 = new Offer(1, source1, 20, 10, agent1);
const offer2 = new Offer(2, source2, 35, 15, agent2);
const offer3 = new Offer(3, source3, 40, 20, agent3);
  
  
  class Acceptance {
    constructor(id, offer, acceptedQuantity, acceptanceRatio) {
      this.id = id;
      this.offer = offer;
      this.acceptedQuantity = acceptedQuantity;
      this.acceptanceRatio = acceptanceRatio;
    }
  
    calculateTotalPrice() {
      return this.acceptedQuantity * this.offer.unitCost;
    }
  
    calculateAcceptanceRatio() {
      return (this.acceptedQuantity / this.offer.quantity) * 100;
    }
  }
  
  const acceptance1 = new Acceptance(1, offer1, 9, 90);
  const acceptance2 = new Acceptance(2, offer2, 16, 36);
  const acceptance3 = new Acceptance(3, offer3, 32, 64);
  
  
  class OfferDTO {
    constructor(period, offers) {
      this.period = period;
      this.offers = offers;
      this.totalEnergyVolume = this.calculateTotalEnergyVolume();
    }
  
    calculateTotalEnergyVolume() {
      let totalVolume = 0;
      this.offers.forEach(offer => {
        totalVolume += offer.quantity;
      });
      return totalVolume;
    }
  }
  
  class AcceptanceDTO {
    constructor(period, acceptances) {
      this.period = period;
      this.acceptances = acceptances;
      this.acceptedEnergyVolume = this.calculateAcceptedEnergyVolume();
      this.totalBudget = this.calculateTotalBudget();
    }

    calculateAcceptedEnergyVolume() {
      let totalVolume = 0;
      this.acceptances.forEach(acceptance => {
        totalVolume += acceptance.acceptedQuantity;
      });
      return totalVolume;
    }
  
  
    calculateTotalBudget() {
      let totalBudget = 0;
      this.acceptances.forEach(acceptance => {
        totalBudget += acceptance.calculateTotalPrice();
      });
      return totalBudget;
    }
  }
  
  
  class OfferManagement {
    constructor() {
      this.offerList = [];
    }
  
    addOffer(offer) {
      this.offerList.push(offer);
    }
  
    calculateTotalPrice() {
      let totalPrice = 0;
      this.offerList.forEach(offer => {
        totalPrice += offer.calculateTotalPrice(); 
      });
      return totalPrice;
    }
  }
  
  class AcceptanceManagement {
    constructor() {
      this.acceptanceList = [];
    }
  
    addAcceptance(acceptance) {
      this.acceptanceList.push(acceptance);
    }
  
    calculateTotalPrice() {
      let totalPrice = 0;
      this.acceptanceList.forEach(acceptance => {
        totalPrice += acceptance.calculateTotalPrice();
      });
      return totalPrice;
    }
  
    calculateAverageAcceptanceRatio() {
      if (this.acceptanceList.length === 0) {
        return 0;
      }

      let totalRatio = 0;
      this.acceptanceList.forEach(acceptance => {
        totalRatio += acceptance.calculateAcceptanceRatio(); 
      });
  
      return totalRatio / this.acceptanceList.length;
    }
  }

  const offerManagement = new OfferManagement();
  const acceptanceManagement = new AcceptanceManagement();

offerManagement.addOffer(offer1);
offerManagement.addOffer(offer2);
offerManagement.addOffer(offer3);

acceptanceManagement.addAcceptance(acceptance1);
acceptanceManagement.addAcceptance(acceptance2);
acceptanceManagement.addAcceptance(acceptance3);

// tekliflerin toplam fiyatını yazdır
console.log(offerManagement.calculateTotalPrice()); 
// kabul edilen tekliflerin toplam fiyatını yazdır
console.log(acceptanceManagement.calculateTotalPrice());

// kabul edilme oranının ortalamasını yazdır. //! Math.ceil metodu ile sonucu bir üst tam sayıya yuvarla
console.log(Math.ceil(acceptanceManagement.calculateAverageAcceptanceRatio()));

// console.log(acceptanceManagement.calculateAverageAcceptanceRatio());         

console.log(source1);
console.log(agent1);
console.log(offer1);
console.log(acceptance1);

console.log(new OfferDTO("period1", [offer1, offer2, offer3])); 
console.log(new AcceptanceDTO("period1", [acceptance1, acceptance2, acceptance3])); 









