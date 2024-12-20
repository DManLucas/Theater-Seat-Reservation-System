# Theater Seat Reservation System

A dynamic web application that allows users to select and reserve seats for a theater venue. Built with vanilla JavaScript, HTML, and CSS.

## Features

- Interactive seating chart with real-time visual feedback
- Support for multiple seating sections (left, middle, right)
- Visual distinction between available, selected, and reserved seats
- User-friendly seat selection process
- Form-based reservation system
- Persistent seat reservation storage
- Responsive design

## Demo

[Add a screenshot or GIF of your application here]

## How It Works

The application simulates a theater seating arrangement with the following features:

- **Seat Status Indicators:**

  - Available seats (clickable)
  - Selected seats (highlighted)
  - Reserved seats (marked with 'R')
  - Row labels (A-T)

- **Seat Selection:**

  - Click available seats to select/deselect
  - Multiple seat selection supported
  - Cannot select already reserved seats

- **Reservation Process:**
  1. Select desired seats
  2. Click "Reserve Seats" button
  3. Fill in name details
  4. Confirm reservation

## Technical Details

- **Pure JavaScript:** No frameworks or libraries required
- **Vanilla CSS:** Custom styling with CSS3 features
- **Semantic HTML5:** Clean and accessible markup
- **SVG Icons:** Vector graphics for seat status visualization

## File Structure

```
theater-reservation/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # Core JavaScript functionality
└── svg/               # Seat icons
    ├── chair-a.svg    # Available seat
    ├── chair-h.svg    # Hover state
    ├── chair-s.svg    # Selected seat
    └── chair-r.svg    # Reserved seat
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/theater-reservation.git
```

2. Navigate to the project directory:

```bash
cd theater-reservation
```

3. Open `index.html` in your web browser

No build process or dependencies required!

## Usage

1. Open the application in your web browser
2. Browse the seating chart
3. Click on available seats to select them
4. Click "Reserve Seats" when ready
5. Fill in your name details
6. Confirm your reservation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Improvements

- Add backend integration for persistent storage
- Implement user authentication
- Add payment processing
- Include seat pricing tiers
- Add mobile-responsive design
- Implement accessibility features
- Add email confirmation system
- Implement seat blocking for concurrent users
- Add admin panel for managing reservations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Inspired by real-world theater booking systems
- SVG icons designed for optimal user experience
- Built as a demonstration of vanilla JavaScript capabilities

## Author

Your Name - [Your GitHub Profile](https://github.com/DManLucas)

## Support

For support, email daddynakeli@gmail.com or open an issue in the repository.
#
