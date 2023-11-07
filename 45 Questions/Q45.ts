

interface CarInfo {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, model: string, ...args: { [key: string]: any }  [] ) : CarInfo {
    const car: CarInfo = {
      manufacturer,
      model,
    };
  
    // Process additional keyword arguments and store them in the car object
    args.forEach((arg) => {
      for (const key in arg) {
        if (arg.hasOwnProperty(key)) {
          car[key] = arg[key];
        }
      }
    });
  
    return car;
  }
  
  // Call the function with required and additional information
  const carInfo = createCar("Toyota", "Camry", { color: "Blue" }, { year: 2023 });
  
  // Print the resulting car object
  console.log(carInfo);