import React from 'react';
import { Calendar } from 'react-big-calendar';
import { Plus } from 'lucide-react';
import { useEventStore } from '../../store/useEventStore';
import { EventModal } from './EventModal';
import { eventService } from '../../services/eventService';
import { calendarLocalizer } from '../../utils/calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export const CalendarView: React.FC = () => {
  const { events, setEvents, addEvent, updateEvent, deleteEvent } = useEventStore();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventService.getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };
    fetchEvents();
  }, [setEvents]);

  const handleEventCreate = async (eventData) => {
    try {
      const newEvent = await eventService.createEvent(eventData);
      addEvent(newEvent);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to create event:', error);
    }
  };

  const handleEventUpdate = async (eventData) => {
    try {
      const updatedEvent = await eventService.updateEvent({
        ...eventData,
        id: selectedEvent.id,
      });
      updateEvent(updatedEvent);
      setIsModalOpen(false);
      setSelectedEvent(null);
    } catch (error) {
      console.error('Failed to update event:', error);
    }
  };

  return (
    <div className="h-screen p-6">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Meeting Calendar</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus size={20} />
          New Event
        </button>
      </div>
      <div className="h-[calc(100vh-120px)] bg-white rounded-lg shadow-lg p-4">
        <Calendar
          localizer={calendarLocalizer}
          events={events}
          startAccessor="startTime"
          endAccessor="endTime"
          onSelectEvent={(event) => {
            setSelectedEvent(event);
            setIsModalOpen(true);
          }}
          style={{ height: '100%' }}
        />
      </div>
      <EventModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEvent(null);
        }}
        onSubmit={selectedEvent ? handleEventUpdate : handleEventCreate}
        initialData={selectedEvent}
      />
    </div>
  );
};