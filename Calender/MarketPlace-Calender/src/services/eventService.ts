import axios from 'axios';
import { Event } from '../types/event';

const API_URL = '/api/events';

export const eventService = {
  getEvents: async () => {
    const response = await axios.get<Event[]>(API_URL);
    return response.data;
  },

  createEvent: async (event: Omit<Event, 'id'>) => {
    const response = await axios.post<Event>(API_URL, event);
    return response.data;
  },

  updateEvent: async (event: Event) => {
    const response = await axios.put<Event>(`${API_URL}/${event.id}`, event);
    return response.data;
  },

  deleteEvent: async (eventId: string) => {
    await axios.delete(`${API_URL}/${eventId}`);
  },
};