import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  hello() {
    return 'Hello World';
  }
}
