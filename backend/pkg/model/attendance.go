package model

import (
	"Attendance/pkg/db"
)

func InsertAttendanceTime(timeID,yearDate,RealTime string)error{
	stmt, err := db.Conn.Prepare("INSERT INTO timeManagement VALUES (?,?,?,?)")
	if err != nil {
		return err
	}
	_, err = stmt.Exec(timeID,1,yearDate,RealTime)
	return err
}