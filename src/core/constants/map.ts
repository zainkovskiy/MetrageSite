export const defultCords: ICords = {
  nsk: { lat: 55.0415, lng: 82.9346 },
  msk: { lat: 55.7522, lng: 37.6156 },
};

interface ICords {
  [key: string]: {
    lat: number;
    lng: number;
  };
}
