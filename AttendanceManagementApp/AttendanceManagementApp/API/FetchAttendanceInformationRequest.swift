//
//  FetchAttendanceInformationRequest.swift
//  AttendanceManagementApp
//
//  Created by 工藤海斗 on 2020/07/30.
//  Copyright © 2020 工藤海斗. All rights reserved.
//

import Foundation
import APIKit

struct FetchAttendanceInformationRequest : AttendanceApiRequest {
    typealias Response = [AttendanceInformation]
    
    var method: HTTPMethod{
        return .get
    }
    
    var path: String{
        return "/repositories"
    }
    
    func response(from object: Any, urlResponse: HTTPURLResponse) throws -> Response {
        let decoder = JSONDecoder()
        guard let data = object as? Data else {
            throw ResponseError.unexpectedObject(object)
        }
        return try decoder.decode(Response.self, from: data)
    }
    
}
