const books = [
    { title: 'Sapiens', author: 'Yuval Noah', subject: 'History', publishDate: '2015' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', subject: 'Social Issues', publishDate: '1960' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', subject: 'American Literature', publishDate: '1925' },
    { title: '1984', author: 'George Orwell', subject: 'Dystopian Fiction', publishDate: '1949' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', subject: 'Classic Literature', publishDate: '1813' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', subject: 'Coming-of-Age', publishDate: '1951' },
    { title: 'Moby-Dick', author: 'Herman Melville', subject: 'Adventure', publishDate: '1851' },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', subject: 'Fantasy', publishDate: '1954' },
    { title: 'The Chronicles of Narnia', author: 'C.S. Lewis', subject: 'Children\'s Fantasy', publishDate: '1950' },
    { title: 'Brave New World', author: 'Aldous Huxley', subject: 'Science Fiction', publishDate: '1932' },
    { title: 'Jane Eyre', author: 'Charlotte Brontë', subject: 'Gothic Fiction', publishDate: '1847' },
    { title: 'The Odyssey', author: 'Homer', subject: 'Epic Poetry', publishDate: '8th century BC' },
    { title: 'Frankenstein', author: 'Mary Shelley', subject: 'Gothic Fiction', publishDate: '1818' },
    { title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', subject: 'Romanticism', publishDate: '1850' },
    { title: 'Wuthering Heights', author: 'Emily Brontë', subject: 'Gothic Fiction', publishDate: '1847' },
    { title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', subject: 'Gothic Fiction', publishDate: '1890' },
    { title: 'The Grapes of Wrath', author: 'John Steinbeck', subject: 'Social Realism', publishDate: '1939' },
    { title: 'The Alchemist', author: 'Paulo Coelho', subject: 'Philosophical Fiction', publishDate: '1988' },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', subject: 'Psychological Fiction', publishDate: '1861' },
    { title: 'Anna Karenina', author: 'Leo Tolstoy', subject: 'Realism', publishDate: '1877' },
    { title: 'The Iliad', author: 'Homer', subject: 'Epic Poetry', publishDate: '8th century BC' },
    { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', subject: 'Adventure', publishDate: '1844' },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', subject: 'Magical Realism', publishDate: '1967' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', subject: 'Fantasy', publishDate: '1937' },
    { title: 'Gone with the Wind', author: 'Margaret Mitchell', subject: 'Historical Fiction', publishDate: '1936' },
    { title: 'The Kite Runner', author: 'Khaled Hosseini', subject: 'Historical Fiction', publishDate: '2003' },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', subject: 'Fantasy', publishDate: '1997' }
  ];
    const resultsPerPage = 10;
    let currentPage = 1;
    let filteredBooks = [];
    
  // Filtered book in the filter page
  
    function displayBooks() {
      const bookList = document.getElementById('bookList');
      bookList.innerHTML = '';
    
      const startIndex = (currentPage - 1) * resultsPerPage;
      const endIndex = startIndex + resultsPerPage;
      const currentBooks = filteredBooks.slice(startIndex, endIndex);
    
      const sortedBooks = filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  
      sortedBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Subject:</strong> ${book.subject}</p>
          <p><strong>Publish Date:</strong> ${book.publishDate}</p>
        `;
        bookList.appendChild(bookElement);
      });
    
      updatePage();
  
    
    }
  
  
  
    // Diaplay full books in main page
  
    function displayAllBooks() {
      const bookList = document.getElementById('bookListAll');
      bookList.innerHTML = '';
    
      const startIndex = (currentPage - 1) * resultsPerPage;
      const endIndex = startIndex + resultsPerPage;
      const currentBooks = books.slice(startIndex, endIndex);
    
  
      currentBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Subject:</strong> ${book.subject}</p>
          <p><strong>Publish Date:</strong> ${book.publishDate}</p>
        `;
        bookList.appendChild(bookElement);
      });
    
      updatePageAllBooks();
  
     
    }
  
    // next and previous button in main page 
  
  
    function updatePageAllBooks() {
      const page = document.getElementById('page');
      page.innerHTML = '';
    
      const totalPages = Math.ceil(books.length / resultsPerPage);
    
      if (totalPages > 1) {
        const previousButton = document.createElement('button');
        previousButton.textContent = 'Previous';
        previousButton.disabled = currentPage === 1;
        previousButton.addEventListener('click', () => {
          currentPage--;
          displayAllBooks();
        });
        page.appendChild(previousButton);
      }
    
      for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        if (i === currentPage) {
          pageButton.disabled = true;
        }
        pageButton.addEventListener('click', () => {
          currentPage = i;
          displayAllBooks();
        });
        page.appendChild(pageButton);
      }
    
      if (totalPages > 1) {
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
          currentPage++;
          displayAllBooks();
        });
        page.appendChild(nextButton);
      }
    }
    
    displayAllBooks();
  
    // next and previous button in filter page 
  
  
    function updatePage() {
      const page = document.getElementById('page');
      page.innerHTML = '';
    
      const totalPages = Math.ceil(filteredBooks.length / resultsPerPage);
    
      if (totalPages > 1) {
        const previousButton = document.createElement('button');
        previousButton.textContent = 'Previous';
        previousButton.disabled = currentPage === 1;
        previousButton.addEventListener('click', () => {
          currentPage--;
          displayBooks();    
        });
        page.appendChild(previousButton);
      }
    
      for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        if (i === currentPage) {
          pageButton.disabled = true;
        }
        pageButton.addEventListener('click', () => {
          currentPage = i;
          displayBooks();
          
        });
        page.appendChild(pageButton);
      }
    
      if (totalPages > 1) {
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
          currentPage++;
          displayBooks();
        });
        page.appendChild(nextButton);
      }
    }
    
    function applyFilters() {
      const titleFilter = document.getElementById('titleFilter').value.trim().toLowerCase();
      const authorFilter = document.getElementById('authorFilter').value.trim().toLowerCase();
      const subjectFilter = document.getElementById('subjectFilter').value.trim().toLowerCase();
      const publishDateFilter = document.getElementById('publishDateFilter').value.trim().toLowerCase();
    
      filteredBooks = books.filter(book => {
        const title = book.title.toLowerCase();
        const author = book.author.toLowerCase();
        const subject = book.subject.toLowerCase();
        const publishDate = book.publishDate.toLowerCase();
    
        return title.includes(titleFilter) &&
          author.includes(authorFilter) &&
          subject.includes(subjectFilter) &&
          publishDate.includes(publishDateFilter) ;
      });
    
      currentPage = 1;
      displayBooks();
  
      hideFilterOptions();
    }
  
  
    displayBooks();
  
 