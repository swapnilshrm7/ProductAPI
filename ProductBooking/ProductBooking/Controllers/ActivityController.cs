using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataAccessLayer;

namespace ProductBooking.Controllers
{
    public class ActivityController : ApiController
    {
        public IEnumerable<ActivityProduct> GetAllValues()
        {
            using (AllProductsDatabaseEntities entity = new AllProductsDatabaseEntities())
            {
                return entity.ActivityProducts.ToList();
            }

        }
        [HttpPut]
        public string PutValue([FromBody]ItemDetail detail)
        {
            using (AllProductsDatabaseEntities entity = new AllProductsDatabaseEntities())
            {
                if (detail.BookOrSave.ToLower() == "book")
                {
                    if (entity.ActivityProducts.Find(detail.Id).IsBooked != true)
                    {
                        entity.ActivityProducts.Find(detail.Id).IsBooked = true;
                        entity.SaveChanges();
                        return "Activity Booked successfully";
                    }
                    else
                        return "Activity already booked";
                }
                else if (detail.BookOrSave.ToLower() == "save")
                {
                    if (entity.ActivityProducts.Find(detail.Id).IsSaved != true)
                    {
                        entity.ActivityProducts.Find(detail.Id).IsSaved = true;
                        entity.SaveChanges();
                        return "Activity saved successfully";
                    }
                    else
                        return "Activity already saved";
                }
                else
                {
                    return "unexpected input";
                }
            }
        }
        [HttpPost]
        public void InsertInto([FromBody]ActivityProduct activity)
        {
            using (AllProductsDatabaseEntities entity = new AllProductsDatabaseEntities())
            {
                entity.ActivityProducts.Add(activity);
                entity.SaveChanges();
            }
        }
    }
}
