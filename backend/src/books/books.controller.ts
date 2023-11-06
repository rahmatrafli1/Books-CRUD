import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  hello() {
    return 'Hello World';
  }

  @Get('/:name')
  helloid(@Param('name') name: string) {
    return 'Hello ' + name;
  }

  @Post()
  createBooks(@Body('name') name: string) {
    return name;
  }
}
