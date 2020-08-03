//
//  ViewController.swift
//  AttendanceManagementApp
//
//  Created by 工藤海斗 on 2020/07/29.
//  Copyright © 2020 工藤海斗. All rights reserved.
//

import UIKit
import APIKit

class ViewController: UIViewController {
    private var api = FetchAttendanceInformationRequest()

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        Session.send(api) { result in
            switch result {
            case .success(let response):
                print(response)
            case .failure(let error):
                print(error)
            }
        }
    }


}

