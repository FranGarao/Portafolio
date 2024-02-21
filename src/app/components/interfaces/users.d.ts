interface users {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  location: {
    address: string;
    city: string;
    state: string;
  };
  autos: {}[];
}
