import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { EnvConfigService } from './__core__/config/env.validation'

const bootstrap = async (): Promise<void> => {
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder().build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)

    app.useGlobalPipes(
        new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } })
    )

    await app.listen(app.get(EnvConfigService).get('PORT'))
}

bootstrap()