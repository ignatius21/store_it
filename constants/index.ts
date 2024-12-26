export const navItems = [
    {
      name: 'Panel de control',
      icon: '/assets/icons/dashboard.svg',
      url: '/',
    },
    {
      name: 'Documentos',
      icon: '/assets/icons/documents.svg',
      url: '/documents',
    },
    {
      name: 'Imagenes',
      icon: '/assets/icons/images.svg',
      url: '/images',
    },
    {
      name: 'Media',
      icon: '/assets/icons/video.svg',
      url: '/media',
    },
    {
      name: 'Otros',
      icon: '/assets/icons/others.svg',
      url: '/others',
    },
  ];
  
  export const actionsDropdownItems = [
    {
      label: 'Renombrar',
      icon: '/assets/icons/edit.svg',
      value: 'rename',
    },
    {
      label: 'Detalles',
      icon: '/assets/icons/info.svg',
      value: 'details',
    },
    {
      label: 'Compartir',
      icon: '/assets/icons/share.svg',
      value: 'share',
    },
    {
      label: 'Descargar',
      icon: '/assets/icons/download.svg',
      value: 'download',
    },
    {
      label: 'Eliminar',
      icon: '/assets/icons/delete.svg',
      value: 'delete',
    },
  ];
  
  export const sortTypes = [
    {
      label: 'Fecha de creación (nuevo)',
      value: '$createdAt-desc',
    },
    {
      label: 'Fecha de creación (viejo)',
      value: '$createdAt-asc',
    },
    {
      label: 'Nombre (A-Z)',
      value: 'name-asc',
    },
    {
      label: 'Nombre (Z-A)',
      value: 'name-desc',
    },
    {
      label: 'Tamaño (Grande)',
      value: 'size-desc',
    },
    {
      label: 'Tamaño (Pequeño)',
      value: 'size-asc',
    },
  ];
  
  export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB