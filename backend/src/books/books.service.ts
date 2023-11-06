import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  private books: any[] = [];

  getAllBook(): any[] {
    return this.books;
  }

  createBook(title: string, author: string, category: string) {
    this.books.push({
      id: uuidv4(),
      title: title,
      author: author,
      category: category,
    });
  }

  updateBook(id: string, title: string, author: string, category: string) {
    const idBook = this.findBookId(id);
    this.books[idBook].title = title;
    this.books[idBook].author = author;
    this.books[idBook].category = category;
  }

  findBookId(id: string) {
    const idBook = this.books.findIndex((book) => book.id === id);

    if (idBook === -1) {
      throw new NotFoundException(`Book with id ${id} is not found!`);
    }

    return idBook;
  }

  getBookId(id: string) {
    const idBook = this.findBookId(id);
    return this.books[idBook];
  }

  deleteBook(id: string) {
    const idBook = this.findBookId(id);
    this.books.splice(idBook, 1);
  }

  getAllParamsBook(title: string, author: string, category: string) {
    const books = this.books.filter((book) => {
      let match = true;
      if (title && book.title != title) {
        match = false;
      }

      if (author && book.author != author) {
        match = false;
      }

      if (category && book.category != category) {
        match = false;
      }
      return match;
    });

    return books;
  }
}
