using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataAccessLayer;

namespace ProductBooking.Controllers
{
    public class AirController : ApiController
    {
        public IEnumerable<AirProduct> GetAllValues()
        {
            using (AllProductsDatabaseEntities entity = new AllProductsDatabaseEntities())
            {
                return entity.AirProducts.ToList();
            }
        }
        [HttpPut]
        public string PutValue([FromBody]ItemDetail detail)
        {
            using (AllProductsDatabaseEntities entity = new AllProductsDatabaseEntities())
            {
                if (detail.BookOrSave.ToLower() == "book")
                {
                    if (entity.AirProducts.Find(detail.Id).IsBooked != true)
                    {
                        entity.AirProducts.Find(detail.Id).IsBooked = true;
                        entity.SaveChanges();
                        return "Flight Booked successfully";
                    }
                    else
                        return "Flight already booked";
                }
                else if (detail.BookOrSave.ToLower() == "save")
                {
                    if (entity.AirProducts.Find(detail.Id).IsSaved != true)
                    {
                        entity.AirProducts.Find(detail.Id).IsSaved = true;
                        entity.SaveChanges();
                        return "Flight saved successfully";
                    }
                    else
                        return "Flight already saved";
                }
                else
                {
                    return "unexpected input";
                }
            }
        }
        [HttpPost]
        public void InsertInto([FromBody]AirProduct flight)
        {
            using (AllProductsDatabaseEntities entity = new AllProductsDatabaseEntities())
            {
                entity.AirProducts.Add(flight);
                entity.SaveChanges();
            }
        }


    }
}
