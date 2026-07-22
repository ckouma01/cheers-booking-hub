const BookAppointment = () => {
  const bookingUrl = "https://kyritsis24.setmore.com/";

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">Reservations</p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground">
              Book Your <em className="font-script">Chair</em>
            </h1>
            <div className="w-12 h-px bg-foreground mx-auto" />
            <p className="text-muted-foreground">Select your service and preferred time below.</p>
          </div>

          <div className="border border-border bg-card rounded-md overflow-hidden shadow-sm">
            <iframe
              src={bookingUrl}
              className="w-full h-[800px] border-0"
              title="Book Appointment at MAGNIFICO"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
