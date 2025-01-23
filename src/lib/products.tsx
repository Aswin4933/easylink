const products = [
    {
      id: 1,
      name: 'A3 Paper',
      price: 28.72,
      originalPrice: 35.90,
      category: 'Paper Products',
      image: '/paperProducts/A3-1.jpeg',
      hoverImage: '/paperProducts/A3-2.jpeg'
    },
    {
      id: 2,
      name: 'A4 Paper',
      price: 24.99,
      originalPrice: 29.99,
      category: 'Paper Products',
      image: '/paperProducts/A4-1.jpeg',
      hoverImage: '/paperProducts/A4-2.jpeg'
    },
    {
      id: 3,
      name: 'A5 Paper',
      price: 19.99,
      originalPrice: 25.99,
      category: 'Paper Products',
      image: '/paperProducts/A5-1.jpeg',
      hoverImage: '/paperProducts/A5-1.jpeg'
    },
    {
      id: 4,
      name: 'Envelopes',
      price: 15.50,
      originalPrice: 18.90,
      category: 'Paper Products',
      image: '/paperProducts/envolopes-1.jpeg',
      hoverImage: '/paperProducts/envolopes-2.jpeg'
    },
    {
      id: 5,
      name: 'Memo Cubes',
      price: 12.99,
      originalPrice: 16.99,
      category: 'Paper Products',
      image: '/paperProducts/memoCubes-1.jpeg',
      hoverImage: '/paperProducts/memoCubes-2.jpeg'
    },
    {
      id: 6,
      name: 'Notebooks',
      price: 22.50,
      originalPrice: 27.90,
      category: 'Paper Products',
      image: '/paperProducts/notebooks-1.jpeg',
      hoverImage: '/paperProducts/notebooks-2.jpeg'
    },
    {
      id: 7,
      name: 'Special Papers',
      price: 32.99,
      originalPrice: 39.99,
      category: 'Paper Products',
      image: '/paperProducts/specialPapers-1.jpeg',
      hoverImage: '/paperProducts/specialPapers-2.jpeg'
    },
    {
      id: 8,
      name: 'Memo Pads',
      price: 32.99,
      originalPrice: 39.99,
      category: 'Paper Products',
      image: '/paperProducts/memoPads-1.jpeg',
      hoverImage: '/paperProducts/memoPads-2.jpeg'
    },
    {
      id: 9,
      name: 'Plotter & Thermal Cash Rolls',
      price: 32.99,
      originalPrice: 39.99,
      category: 'Paper Products',
      image: '/paperProducts/plotter-1.jpeg',
      hoverImage: '/paperProducts/memoPads-2.jpeg'
    },
    {
      id: 10,
      name: 'Calendar, dairies & planner',
      price: 32.99,
      originalPrice: 39.99,
      category: 'Paper Products',
      image: '/paperProducts/calender-1.jpeg',
      hoverImage: '/paperProducts/calender-2.jpeg'
    },
    {
      id: 11,
      name: 'Box Files',
      price: 32.99,
      originalPrice: 39.99,
      category: 'Box Files',
      image: '/boxFiles/box-files-1.jpeg',
      hoverImage: '/boxFiles/box-files-2.jpeg'
    },
    {
      id: 12,
      name: 'Marble Box Files',
      price: 32.99,
      originalPrice: 39.99,
      category: 'Box Files',
      image: '/boxFiles/marble-1.jpeg',
      hoverImage: '/boxFiles/marble-2.jpeg'
    },
    {
      id: 13,
      name: 'Ball Point Pen',
      price: 8.99,
      originalPrice: 12.99,
      category: 'Writing Instruments',
      image: '/writingInsturments/ballpen-1.jpeg',
      hoverImage: '/writingInsturments/ballpen-2.jpeg'
    },
    {
      id: 14,
      name: 'Fibre Pen',
      price: 15.99,
      originalPrice: 19.99,
      category: 'Writing Instruments',
      image: '/writingInsturments/fibrePen-1.jpeg',
      hoverImage: '/writingInsturments/fibrePen-2.jpeg'
    },
    {
      id: 15,
      name: 'Fine Liner Pens',
      price: 18.50,
      originalPrice: 22.90,
      category: 'Writing Instruments',
      image: '/writingInsturments/fineLinerPens-1.jpeg',
      hoverImage: '/writingInsturments/fineLinerPens-2.jpeg'
    },
    {
      id: 16,
      name: 'Fountain Pen',
      price: 45.99,
      originalPrice: 59.99,
      category: 'Writing Instruments',
      image: '/writingInsturments/fountainPen-1.jpeg',
      hoverImage: '/writingInsturments/fountainPen-2.jpeg'
    },
    {
      id: 17,
      name: 'Fountain Pen Ink',
      price: 12.99,
      originalPrice: 15.99,
      category: 'Writing Instruments',
      image: '/writingInsturments/fountainPenInk-1.jpeg',
      hoverImage: '/writingInsturments/fountainPenInk-2.jpeg'
    },
    {
      id: 18,
      name: 'Mechanical Pencil',
      price: 14.99,
      originalPrice: 18.99,
      category: 'Writing Instruments',
      image: '/writingInsturments/mechanicalPencil-1.jpeg',
      hoverImage: '/writingInsturments/mechanicalPencil-2.jpeg'
    },
    {
      id: 19,
      name: 'Pen Holder',
      price: 22.99,
      originalPrice: 27.99,
      category: 'Writing Instruments',
      image: '/writingInsturments/penHolder-1.jpeg',
      hoverImage: '/writingInsturments/penHolder-2.jpeg'
    },
    {
      id: 20,
      name: 'Text Highlighter',
      price: 9.99,
      originalPrice: 12.99,
      category: 'Writing Instruments',
      image: '/writingInsturments/textHighLighter-1.jpeg',
      hoverImage: '/writingInsturments/textHighLighter-2.jpeg'
    },
    {
      id: 21,
      name: 'Clips & Pins',
      price: 5.99,
      originalPrice: 7.99,
      category: 'Office Essentials',
      image: '/officeEssentials/clips-1.jpeg',
      hoverImage: '/officeEssentials/clips-2.jpeg'
    },
    {
      id: 22,
      name: 'Correction Pen',
      price: 4.99,
      originalPrice: 6.99,
      category: 'Office Essentials',
      image: '/officeEssentials/correctionPen-1.jpeg',
      hoverImage: '/officeEssentials/correctionPen-2.jpeg'
    },
    {
      id: 23,
      name: 'Eraser',
      price: 2.99,
      originalPrice: 3.99,
      category: 'Office Essentials',
      image: '/officeEssentials/eraser-1.jpeg',
      hoverImage: '/officeEssentials/eraser-2.jpeg'
    },
    {
      id: 24,
      name: 'Glue',
      price: 6.99,
      originalPrice: 8.99,
      category: 'Office Essentials',
      image: '/officeEssentials/glue-1.jpeg',
      hoverImage: '/officeEssentials/glue-2.jpeg'
    },
    {
      id: 25,
      name: 'Hole Punchers',
      price: 12.99,
      originalPrice: 15.99,
      category: 'Office Essentials',
      image: '/officeEssentials/holePunchers-1.jpeg',
      hoverImage: '/officeEssentials/holePunchers-2.jpeg'
    },
    {
      id: 26,
      name: 'Scissors',
      price: 8.99,
      originalPrice: 11.99,
      category: 'Office Essentials',
      image: '/officeEssentials/scissors-1.jpeg',
      hoverImage: '/officeEssentials/scissors-2.jpeg'
    },
    {
      id: 27,
      name: 'Sharpener',
      price: 3.99,
      originalPrice: 5.99,
      category: 'Office Essentials',
      image: '/officeEssentials/sharpner-1.jpeg',
      hoverImage: '/officeEssentials/sharpner-2.jpeg'
    },
    {
      id: 28,
      name: 'Stamps & Stamp Pads',
      price: 15.99,
      originalPrice: 19.99,
      category: 'Office Essentials',
      image: '/officeEssentials/stampsAndStampPads-1.jpeg',
      hoverImage: '/officeEssentials/stampsAndStampPads-2.jpeg'
    },
    {
      id: 29,
      name: 'Staplers',
      price: 9.99,
      originalPrice: 12.99,
      category: 'Office Essentials',
      image: '/officeEssentials/staplers-1.jpeg',
      hoverImage: '/officeEssentials/staplers-2.jpeg'
    },
    {
      id: 30,
      name: 'Tape',
      price: 4.99,
      originalPrice: 6.99,
      category: 'Office Essentials',
      image: '/officeEssentials/tape-1.jpeg',
      hoverImage: '/officeEssentials/tape-2.jpeg'
    },
    {
      id: 31,
      name: 'Batteries',
      price: 12.99,
      originalPrice: 15.99,
      category: 'Printers & Technology',
      image: '/printersAndTechnology/batteries-1.jpeg',
      hoverImage: '/printersAndTechnology/batteries-2.jpeg'
    },
    {
      id: 32,
      name: 'Keyboard',
      price: 29.99,
      originalPrice: 34.99,
      category: 'Printers & Technology',
      image: '/printersAndTechnology/keyboard-1.jpeg',
      hoverImage: '/printersAndTechnology/keyboard-2.jpeg'
    },
    {
      id: 33,
      name: 'Monitor',
      price: 199.99,
      originalPrice: 249.99,
      category: 'Printers & Technology',
      image: '/printersAndTechnology/monitor-1.jpeg',
      hoverImage: '/printersAndTechnology/monitor-2.jpeg'
    },
    {
      id: 34,
      name: 'Mouse',
      price: 19.99,
      originalPrice: 24.99,
      category: 'Printers & Technology',
      image: '/printersAndTechnology/mouse-1.jpeg',
      hoverImage: '/printersAndTechnology/mouse-2.jpeg'
    },
    {
      id: 35,
      name: 'Printer',
      price: 299.99,
      originalPrice: 349.99,
      category: 'Printers & Technology',
      image: '/printersAndTechnology/printer-1.jpeg',
      hoverImage: '/printersAndTechnology/printer-2.jpeg'
    },
    {
      id: 36,
      name: 'Projector',
      price: 499.99,
      originalPrice: 599.99,
      category: 'Printers & Technology',
      image: '/printersAndTechnology/projector-1.jpeg',
      hoverImage: '/printersAndTechnology/projector-2.jpeg'
    },
    {
      id: 37,
      name: 'Projector Screens',
      price: 149.99,
      originalPrice: 179.99,
      category: 'Printers & Technology',
      image: '/printersAndTechnology/projectorScreens-1.jpeg',
      hoverImage: '/printersAndTechnology/projectorScreens-2.jpeg'
    },
    {
      id: 38,
      name: 'Scanner',
      price: 159.99,
      originalPrice: 189.99,
      category: 'Printers & Technology',
      image: '/printersAndTechnology/scanner-1.jpeg',
      hoverImage: '/printersAndTechnology/scanner-2.jpeg'
    },
    {
      id: 39,
      name: 'USB Flash Drive',
      price: 24.99,
      originalPrice: 29.99,
      category: 'Printers & Technology',
      image: '/printersAndTechnology/usebFlashDrive-1.jpeg',
      hoverImage: '/printersAndTechnology/usebFlashDrive-2.jpeg'
    },
    {
      id: 40,
      name: 'Calculator',
      price: 24.99,
      originalPrice: 29.99,
      category: 'Office Machines',
      image: '/officeMachines/calculator-1.webp',
      hoverImage: '/officeMachines/calculator-2.jfif'
    },
    {
      id: 41,
      name: 'Laminator',
      price: 89.99,
      originalPrice: 109.99,
      category: 'Office Machines',
      image: '/officeMachines/laminator-1.jpeg',
      hoverImage: '/officeMachines/laminator-2.jpeg'
    },
    {
      id: 42,
      name: 'Paper Shredder',
      price: 149.99,
      originalPrice: 179.99,
      category: 'Office Machines',
      image: '/officeMachines/paperShredder-1.jpeg',
      hoverImage: '/officeMachines/paperShredder-2.jpeg'
    },
    {
      id: 43,
      name: 'Business Card Organizer',
      price: 18.99,
      originalPrice: 24.99,
      category: 'Desk Organizers',
      image: '/deskOrgainzer/businessCardOrgainzer-1.jpeg',
      hoverImage: '/deskOrgainzer/businessCardOrgainzer-2.jpeg'
    },
    {
      id: 44,
      name: 'Document Tray',
      price: 29.99,
      originalPrice: 34.99,
      category: 'Desk Organizers',
      image: '/deskOrgainzer/documentTray-1.jpeg',
      hoverImage: '/deskOrgainzer/documentTray-2.jpeg'
    },
    {
      id: 45,
      name: 'Waste Basket',
      price: 15.99,
      originalPrice: 19.99,
      category: 'Desk Organizers',
      image: '/deskOrgainzer/wasteBasket-1.jpeg',
      hoverImage: '/deskOrgainzer/wasteBasket-2.jpeg'
    }
    

    
  ];

export default products;