import { HotelModel } from "@/models/hotel.model";

export async function getAllHotels() {
  const hotels = await HotelModel.find().lean();
}
