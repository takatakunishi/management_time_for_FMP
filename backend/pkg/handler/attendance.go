package handler

import (
	"Attendance/pkg/model"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"log"
	"net/http"
	"strconv"
	"time"
)
func HandleResistAttend()gin.HandlerFunc{
		return func(c *gin.Context){
			//const layout = "2006-01-02 15:04"
			const layout = "2006-01-02"
			time := time.Now()
			yearDate:=time.Format(layout)
			minute:=strconv.Itoa(time.Minute())
			hour:= strconv.Itoa(time.Hour())
			realTime :=hour +":" + minute
			//attendTime:=yearDate+":"+realTime

			// UUIDでユーザIDを生成する
			timeID, err := uuid.NewRandom()
			if err != nil {
				log.Println(err)
				c.JSON(http.StatusInternalServerError, "timeID is error")
				return
			}
			if err:=model.InsertAttendanceTime(timeID.String(),yearDate,realTime);err!=nil{
				log.Println(err)
				c.JSON(http.StatusInternalServerError, "Internal Server Error")
				return
			}
			c.JSON(http.StatusOK, "")
			return
	}
}