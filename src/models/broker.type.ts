class Broker {
  id?: string;
  name: string;
  city: string;
  country: string;
  address: string;

  constructor(ref?: Broker) {
    if (ref) {
      this.id = ref.id;
      this.name = ref.name;
      this.city = ref.city;
      this.country = ref.country;
      this.address = ref.address;
    } else {
      this.id = "";
      this.name = "";
      this.city = "";
      this.country = "";
      this.address = "";
    }
  }
}

export default Broker;
