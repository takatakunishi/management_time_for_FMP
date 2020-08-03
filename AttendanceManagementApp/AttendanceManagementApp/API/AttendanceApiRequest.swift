//
//  AttendanceApiRequest.swift
//  AttendanceManagementApp
//
//  Created by 工藤海斗 on 2020/07/30.
//  Copyright © 2020 工藤海斗. All rights reserved.
//

import Foundation
import APIKit

protocol AttendanceApiRequest:Request {
    
}

extension AttendanceApiRequest{
    var baseURL:URL{
        return URL(string: "https://api.github.com")! // ここは暫定
    }
}

extension AttendanceApiRequest where Response : Decodable{
    var dataParser: DataParser{
        return DecodableDataParse()
    }
}
