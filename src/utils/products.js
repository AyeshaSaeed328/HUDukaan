

export const products = [
    // Clothing Category
    {
      id: 1,
      name: 'University Hoodie',
      price: '$60',
      href: '#',
      category: 'Clothing',
      breadcrumbs: [
        { id: 1, name: 'Clothing', href: '#' },
        { id: 2, name: 'Hoodies', href: '#' },
      ],
      images: [
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2018/07/40.jpg',
          alt: 'University-branded hoodie in navy blue.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2018/07/40.jpg',
          alt: 'Model wearing a university hoodie.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2018/07/40.jpg',
          alt: 'Model wearing a university hoodie.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2018/07/40.jpg',
          alt: 'Model wearing a university hoodie.',
        },
        
      ],
      colors: [
        { name: 'Navy', class: 'bg-blue-500', selectedClass: 'ring-blue-400' },
        { name: 'Gray', class: 'bg-gray-500', selectedClass: 'ring-gray-400' },
      ],
      sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: false },
      ],
      description: 'Comfortable and stylish university-branded hoodie.',
      highlights: ['80% Cotton, 20% Polyester', 'Machine Washable', 'Unisex Fit'],
      details: 'Perfect for staying warm on chilly days.',
    },
    {
      id: 2,
      name: 'University T-Shirt',
      price: '$25',
      href: '#',
      category: 'Clothing',
      breadcrumbs: [
        { id: 1, name: 'Clothing', href: '#' },
        { id: 2, name: 'T-Shirts', href: '#' },
      ],
      images: [
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2020/01/46-1.jpg',
          alt: 'University-branded T-shirt in white.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2020/01/46-1.jpg',
          alt: 'Model wearing a university T-shirt.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2020/01/46-1.jpg',
          alt: 'Model wearing a university T-shirt.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2020/01/46-1.jpg',
          alt: 'Model wearing a university T-shirt.',
        },
       
      ],
      colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-black', selectedClass: 'ring-black' },
      ],
      sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
      ],
      description: 'Casual and comfortable university-branded T-shirt.',
      highlights: ['100% Cotton', 'Machine Washable', 'Breathable Fabric'],
      details: 'Available in multiple colors and sizes.',
    },
    
    // Merch Category
    {
      id: 3,
      name: 'University Mug',
      price: '$15',
      href: '#',
      category: 'Merch',
      breadcrumbs: [
        { id: 1, name: 'Merch', href: '#' },
        { id: 2, name: 'Drinkware', href: '#' },
      ],
      images: [
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2018/07/8.jpg',
          alt: 'White mug with university logo.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2018/07/8.jpg',
          alt: 'Close-up of the university logo on the mug.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2018/07/8.jpg',
          alt: 'Close-up of the university logo on the mug.',
        },

        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2018/07/8.jpg',
          alt: 'Close-up of the university logo on the mug.',}
      ],
      description: 'Classic ceramic mug with the university logo.',
      highlights: ['Ceramic', 'Dishwasher Safe', 'Microwave Safe'],
      details: 'Perfect for your morning coffee or tea.',
    },
    {
      id: 4,
      name: 'University Keychain',
      price: '$5',
      href: '#',
      category: 'Merch',
      breadcrumbs: [
        { id: 1, name: 'Merch', href: '#' },
        { id: 2, name: 'Accessories', href: '#' },
      ],
      images: [
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2018/12/4.jpg',
          alt: 'University keychain with logo.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2018/12/4.jpg',
          alt: 'Close-up of the university logo on the keychain.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2018/12/4.jpg',
          alt: 'Close-up of the university logo on the keychain.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2018/12/4.jpg',
          alt: 'Close-up of the university logo on the keychain.',
        },

      ],
      description: 'Metal keychain with the university emblem.',
      highlights: ['Metal', 'Durable', 'Compact Size'],
      details: 'Show your school pride wherever you go.',
    },
    
    // Electronics Category
    {
      id: 5,
      name: 'Wireless Mouse',
      price: '$25',
      href: '#',
      category: 'Electronics',
      breadcrumbs: [
        { id: 1, name: 'Electronics', href: '#' },
        { id: 2, name: 'Accessories', href: '#' },
      ],
      images: [
        {
          src: 'https://logitech.onlinesalestore.pk/cdn/shop/files/logitech-m240-bluetooth-wireless-mouse-silent-graphite-main-image_600x.jpg?v=1700747962',
          alt: 'Wireless mouse in black.',
        },
        {
          src: 'https://logitech.onlinesalestore.pk/cdn/shop/files/logitech-m240-bluetooth-wireless-mouse-silent-graphite-main-image_600x.jpg?v=1700747962',
          alt: 'Wireless mouse in black.',
        },
        {
          src: 'https://logitech.onlinesalestore.pk/cdn/shop/files/logitech-m240-bluetooth-wireless-mouse-silent-graphite-main-image_600x.jpg?v=1700747962',
          alt: 'Wireless mouse in black.',
        },
        {
          src: 'https://logitech.onlinesalestore.pk/cdn/shop/files/logitech-m240-bluetooth-wireless-mouse-silent-graphite-main-image_600x.jpg?v=1700747962',
          alt: 'Wireless mouse in black.',
        },

      ],
      description: 'Ergonomic wireless mouse with Bluetooth connectivity.',
      highlights: ['Bluetooth 4.0', 'Ergonomic Design', 'Long Battery Life'],
      details: 'Compatible with Windows, macOS, and Linux.',
    },
    {
      id: 6,
      name: 'USB-C Hub',
      price: '$40',
      href: '#',
      category: 'Electronics',
      breadcrumbs: [
        { id: 1, name: 'Electronics', href: '#' },
        { id: 2, name: 'Accessories', href: '#' },
      ],
      images: [
        {
          src: 'https://images.deliveryhero.io/image/darsktores-pk/861408009001.jpg?height=480',
          alt: 'USB-C Hub with multiple ports.',
        },
        {
          src: 'https://images.deliveryhero.io/image/darsktores-pk/861408009001.jpg?height=480',
          alt: 'Close-up of USB-C Hub ports.',
        },
        {
          src: 'https://images.deliveryhero.io/image/darsktores-pk/861408009001.jpg?height=480',
          alt: 'Close-up of USB-C Hub ports.',
        },
        {
          src: 'https://images.deliveryhero.io/image/darsktores-pk/861408009001.jpg?height=480',
          alt: 'Close-up of USB-C Hub ports.',
        },
        
        
      ],
      description: 'Multi-port USB-C hub for laptops and tablets.',
      highlights: ['4 USB Ports', 'HDMI Output', 'Ethernet Port'],
      details: 'Expand the functionality of your laptop with this compact hub.',
    },
  
    // Stationery Category
    {
      id: 7,
      name: 'Notebook Set',
      price: '$12',
      href: '#',
      category: 'Stationery',
      breadcrumbs: [
        { id: 1, name: 'Stationery', href: '#' },
        { id: 2, name: 'Notebooks', href: '#' },
      ],
      images: [
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2020/01/19-2.jpg',
          alt: 'Set of 3 university-branded notebooks.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2020/01/19-2.jpg',
          alt: 'Close-up of university logo on notebook.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2020/01/19-2.jpg',
          alt: 'Close-up of university logo on notebook.',
        },
        {
          src: 'https://habib.edu.pk/dukaan/wp-content/uploads/2020/01/19-2.jpg',
          alt: 'Close-up of university logo on notebook.',}
      ],
      description: 'Set of 3 notebooks with university logo on the cover.',
      highlights: ['Ruled Pages', 'Durable Cover', '80 Pages per Notebook'],
      details: 'Perfect for taking notes in class or for personal use.',
    },
    
    // Snacks Category
    {
      id: 8,
      name: 'Energy Bar - Chocolate',
      price: '$2',
      href: '#',
      category: 'Snacks',
      breadcrumbs: [
        { id: 1, name: 'Snacks', href: '#' },
        { id: 2, name: 'Energy Bars', href: '#' },
      ],
      images: [
        {
          src: 'https://media.naheed.pk/catalog/product/cache/17cb4734a0ff40d859ea4c0cfd876903/1/1/1170492-1_1.jpg',
          alt: 'Chocolate-flavored energy bar.',
        },
        {
          src: 'https://media.naheed.pk/catalog/product/cache/17cb4734a0ff40d859ea4c0cfd876903/1/1/1170492-1_1.jpg',
          alt: 'Energy bar with chocolate coating.',
        },
        {
          src: 'https://media.naheed.pk/catalog/product/cache/17cb4734a0ff40d859ea4c0cfd876903/1/1/1170492-1_1.jpg',
          alt: 'Energy bar with chocolate coating.',
        },
        {
          src: 'https://media.naheed.pk/catalog/product/cache/17cb4734a0ff40d859ea4c0cfd876903/1/1/1170492-1_1.jpg',
          alt: 'Energy bar with chocolate coating.',}
      ],
      description: 'Delicious chocolate-flavored energy bar for a quick boost.',
      highlights: ['200 Calories', 'Gluten-Free', 'No Artificial Flavors'],
      details: 'Perfect for a quick snack between classes.',
    },
]