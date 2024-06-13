import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const config = new DocumentBuilder()
		.setTitle('Products')
		.setDescription('The products API description')
		.setVersion('1.0')
		.addTag('product')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	app.use(cookieParser())

	app.useGlobalPipes(new ValidationPipe())

	await app.listen(3000)
}
bootstrap()
