interface Dealership1Vehicle {
  vin: string;
  done: boolean;
  lineItems: Dealership1LineItem[];
}

interface Dealership1LineItem {
  description: string;
}

export { Dealership1Vehicle, Dealership1LineItem };
