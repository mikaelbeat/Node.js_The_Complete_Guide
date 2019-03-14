
/* getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
}); */

async function sendTopMoviesInMail() {
  try {
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if (customer.isGold) {
      const topMovies = await getTopMovies(customer.name);
      console.log('Top movies: ', topMovies);
      await sendEmail(customer.email, topMovies);
      console.log('Email sent...');
    }
  }
  catch (err) {
    console.log('Error', err.message);
  }
};

sendTopMoviesInMail();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
    resolve({ 
      id: 1, 
      name: 'Mosh Hamedani', 
      isGold: true, 
      email: 'email.com' 
  }, 1000);
    });
  });  
}

function getTopMovies(name) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
    resolve(['movie1', 'movie2']);
  }, 1000);
  });
};

function sendEmail(topMovies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Sending emails...');
      resolve('Movies');
    }, 1000);
  });
};