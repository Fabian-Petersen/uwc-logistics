import Wrapper from "../styleWrappers/stylesBooking";

const Booking = () => {
  const handleSubmit = () => {};
  return (
    <Wrapper>
      <main className="booking_Container">
        <h1>Book Trip</h1>
        <form onSubmit={handleSubmit}>
          <div className="date row">
            <label htmlFor="startDate">Start Date</label>
            <label htmlFor="endDate">End Date</label>
            <input type="date" name="startDate" />
            <input type="date" name="endDate" />
          </div>
          <div className="time row">
            <label htmlFor="startTime">Start Time</label>
            <label htmlFor="endTime">End Time</label>
            <input type="time" name="startTime" />
            <input type="time" name="endTime" />
          </div>
          <div className="km row">
            <label htmlFor="startKm">Start Kilometers</label>
            <label htmlFor="endKm">End Kilometers</label>
            <input type="number" name="startKm" />
            <input type="number" name="endKm" />
          </div>
          <button type="submit" className="btn-global">
            Book
          </button>
        </form>
      </main>
    </Wrapper>
  );
};

export default Booking;
