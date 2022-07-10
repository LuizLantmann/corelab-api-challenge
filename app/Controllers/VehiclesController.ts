import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { IVehicle } from 'App/Types/Vehicle'
import Vehicle from 'App/Models/Vehicle'

export default class VehiclesController {
  public async index(_ctx: HttpContextContract) {
    const vehicles = await Vehicle.all()

    return vehicles
  }

  public async create({ request }: HttpContextContract) {
    const params = request.only(['name', 'description', 'plate', 'year', 'color', 'price'])

    const vehicle = await Vehicle.create({
      name: params.name,
      description: params.description,
      plate: params.plate,
      year: params.year,
      color: params.color,
      price: params.price,
    })
    return vehicle
  }
  }
  public async update(ctt: HttpContextContract) {
    return { action: 'update' }
  }
  public async delete(ctt: HttpContextContract) {
    return { action: 'delete' }
  }
}
