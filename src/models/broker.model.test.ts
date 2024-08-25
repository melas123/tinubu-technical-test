import Broker from "./broker.type";

describe("Broker", () => {
  it("should create instance without ref correctly", () => {
    const instance = new Broker();
    expect(instance).toBeDefined();
    expect(instance.id).toBe("");
    expect(instance.name).toBe("");
    expect(instance.city).toBe("");
    expect(instance.country).toBe("");
    expect(instance.address).toBe("");
  });

  it("should create instance with ref correctly", () => {
    const ref = {
      address: "address",
      city: "city",
      country: "country",
      id: "id",
      name: "name",
    } as Broker;
    const instance = new Broker(ref);
    expect(instance).toBeDefined();
    expect(instance.id).toEqual("id");
    expect(instance.name).toEqual("name");
    expect(instance.city).toEqual("city");
    expect(instance.country).toEqual("country");
    expect(instance.address).toEqual("address");
  });
});
